import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { api } from '../../services/axios';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session]: any = useSession();
  const router = useRouter();

  const handleSubscribe = useCallback(async () => {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await api.post('subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }, [session]);

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  );
}

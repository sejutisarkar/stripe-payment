const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_4vZznokAUixe5yJpI8tV9aoM';

export default STRIPE_PUBLISHABLE;

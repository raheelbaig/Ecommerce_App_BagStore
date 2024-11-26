export const COUPON_CODE = {
  BFRIDAY: "BFRIDAY",
  XMAS2021: "XMAS2021",
  NY2022: "NY2022",
} as const;

export type CouponCode = keyof typeof COUPON_CODE;

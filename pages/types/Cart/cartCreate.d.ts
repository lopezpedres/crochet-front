export interface cartCreate {
    input: Input;
  }
  export interface Input {
    attributes?: (AttributesEntityOrAttributes)[] | null;
    buyerIdentity: BuyerIdentity;
    discountCodes?: (string)[] | null;
    lines?: (LinesEntity)[] | null;
    note: string;
  }
  export interface AttributesEntityOrAttributes {
    key: string;
    value: string;
  }
  export interface BuyerIdentity {
    countryCode: string;
    customerAccessToken: string;
    email: string;
    phone: string;
  }
  export interface LinesEntity {
    attributes: AttributesEntityOrAttributes;
    merchandiseId: string;
    quantity: number;
    sellingPlanId: string;
  }
  
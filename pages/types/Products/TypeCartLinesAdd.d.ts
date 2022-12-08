export interface TypeCartLinesAdd {
  cartId: string;
    lines: Lines;
  }
  export interface Lines {
    attributes?: (AttributesEntity)[] | null;
    merchandiseId: string;
    quantity: number;
    sellingPlanId?: string;
  }
  export interface AttributesEntity {
    key: string;
    value: string;
  }
  
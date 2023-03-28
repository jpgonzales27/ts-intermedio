export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const usuario: User = {
  username: 'juanpablo',
  role: ROLES.ADMIN,
};

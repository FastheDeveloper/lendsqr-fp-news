export interface UserMetadata {
  creationTime: number;
  lastSignInTime: number;
}

export interface MultiFactor {
  enrolledFactors: any[]; // Adjust the type of enrolledFactors as needed
}

interface ProviderData {
  // Define the structure of providerData objects if known
  [key: string]: any;
}

export interface UserType {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  multiFactor: MultiFactor;
  phoneNumber: string | null;
  photoURL: string;
  providerData: ProviderData[];
  providerId: string;
  refreshToken: string;
  tenantId: string | null;
  uid: string;
}

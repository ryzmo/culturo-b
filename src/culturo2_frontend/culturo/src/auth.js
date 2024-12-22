import { AuthClient } from "@dfinity/auth-client";

// URL Internet Identity resmi
const INTERNET_IDENTITY_URL = "https://identity.ic0.app";

export async function authenticate(callback) {
  const authClient = await AuthClient.create();

  // Cek jika sudah login sebelumnya
  if (await authClient.isAuthenticated()) {
    const identity = authClient.getIdentity();
    callback(identity);
    return;
  }

  // Jika belum login, tampilkan UI login
  await authClient.login({
    identityProvider: INTERNET_IDENTITY_URL,
    onSuccess: () => {
      const identity = authClient.getIdentity();
      callback(identity);
    },
    onError: (err) => console.error("Login Failed", err),
  });
}

// Fungsi untuk logout
export async function logout(callback) {
  const authClient = await AuthClient.create();
  await authClient.logout(); // Menghapus sesi login Internet Identity
  console.log("Logged out successfully");
  callback(); // Callback untuk menghapus state identity di App
}
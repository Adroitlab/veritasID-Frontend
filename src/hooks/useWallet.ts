import { useEffect, useState } from 'react';

export function useWallet() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Placeholder for real wallet connection logic
    setConnected(false);
  }, []);

  return {
    connected,
    connect: () => setConnected(true)
  };
}

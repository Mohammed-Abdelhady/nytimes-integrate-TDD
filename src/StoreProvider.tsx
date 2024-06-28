'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './lib/store';

/**
 * Renders the StoreProvider component with the provided children.
 *
 * @param {React.ReactNode} children - The children elements to be rendered within the StoreProvider.
 * @return {React.ReactElement} The rendered StoreProvider component with the specified children.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

import React from "react";

interface SkeletonWrapperProps {
  loading: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode;
  count?: number; // number of skeletons to show
}

export default function SkeletonWrapper({
  loading,
  skeleton,
  children,
  count = 1, // default 3 skeletons
}: SkeletonWrapperProps) {
  if (loading) {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <React.Fragment key={i}>{skeleton}</React.Fragment>
        ))}
      </>
    );
  }
  return <>{children}</>;
}

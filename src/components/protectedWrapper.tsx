import { ReactNode } from "react";
const ProtectedWrapper = ({ children }: { children: ReactNode }) => {
 

  return (
    <div>
      {/* Display data or loading message */}
      {children}
    </div>
  );
};

export default ProtectedWrapper;

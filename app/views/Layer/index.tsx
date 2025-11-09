export interface ILayer {
  children: React.ReactNode;
}

export const Layer: React.FC<ILayer> = ({ children }) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

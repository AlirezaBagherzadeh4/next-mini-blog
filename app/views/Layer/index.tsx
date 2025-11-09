export interface ILayer {
  children: React.ReactNode;
}

export const Layer: React.FC<ILayer> = ({ children }) => {
  return <div className="mx-auto max-w-5xl px-8 xl:px-0">{children}</div>;
};

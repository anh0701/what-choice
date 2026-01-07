import type { ReactNode, MouseEvent } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  open,
  title,
  onClose,
  children,
}: ModalProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" onClick={stopPropagation}>
        {title && (
          <div className="modal-header">
            <h3>{title}</h3>
            <button onClick={onClose}>✕</button>
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

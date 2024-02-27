import { dialogProps } from 'app/types/types';
import { useEffect, useRef } from 'react';

type ElmentType = HTMLAnchorElement | HTMLButtonElement | HTMLInputElement;

export default function useFocusTrap({
  isDialogOpen,
  handleDialog,
}: dialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstElement = useRef<ElmentType | undefined | null>(null);
  const lastElement = useRef<ElmentType | undefined | null>(null);

  useEffect(() => {
    if (isDialogOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, a, input'
      ) as NodeListOf<ElmentType> | undefined;

      firstElement.current = focusableElements && focusableElements[0];
      lastElement.current =
        focusableElements && focusableElements[focusableElements.length - 1];
    }
  }, [isDialogOpen, modalRef]);

  useEffect(() => {
    // focus on first focusable Element
    if (isDialogOpen && firstElement.current) {
      firstElement.current.focus();
    }
  }, [isDialogOpen, firstElement]);

  useEffect(() => {
    const handleFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey && e.target === lastElement.current) {
        e.preventDefault();
        firstElement.current?.focus();
      } else if (
        e.key === 'Tab' &&
        e.shiftKey &&
        e.target === firstElement.current
      ) {
        e.preventDefault();
        lastElement.current?.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleDialog();
      }
    };

    document.addEventListener('keydown', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleFocus);
    };
  }, [firstElement, lastElement, handleDialog]);

  return modalRef;
}

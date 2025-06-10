import React, { useEffect, useRef } from 'react';

export default function TrashDropZone({ onCardDrop }) {
  const dropRef = useRef(null);

  useEffect(() => {
    const dropArea = dropRef.current;

    const handleDrop = (e) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData('card'));
      onCardDrop({ card: data.card, from: data.from });
    };

    dropArea.addEventListener('dragover', (e) => e.preventDefault());
    dropArea.addEventListener('drop', handleDrop);

    return () => {
      dropArea.removeEventListener('drop', handleDrop);
    };
  }, [onCardDrop]);

  return (
    <div ref={dropRef} className="trash-drop-zone">
      🗑️<br />
      <span>Trash Bin</span>
    </div>
  );
}

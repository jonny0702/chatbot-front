interface ButtonFormatPropAction {
  action: () => void;
  isSelected: boolean;
}

export const ButtonSetMarkDownFormat: React.FC<ButtonFormatPropAction> = ({
  action,
  isSelected,
}) => {
  return (
    <div
      style={{
        height: "fit-content",
      }}
      onClick={action}
    >
      <button
        type="button"
        className={
          isSelected ? "btn btn-dark outline-1" : "btn btn-light outline-1"
        }
      >
        Set Markdown Format
      </button>
    </div>
  );
};

import Button from "@mui/material/Button";
import TextFieldComponent from "../../common_ui/mui_components/text_field/TextFieldComponent";

interface TableSectionProps {
  title: string;
  search?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showSearch?: boolean;
  showExport?: boolean;
  showAdd?: boolean;
  exportIcon?: string;
  addIcon?: string;
  addText?: string;
  exportText?: string;
  placeholderText?: string;
}

export default function TableSection({
  title,
  search,
  onSearchChange,
  showSearch = true,
  showExport = true,
  showAdd = true,
  exportIcon,
  addIcon,
  exportText,
  addText,
  placeholderText,
}: TableSectionProps) {
  return (
    <div className="table-section">
      <div className="table-header">
        <div className="table-left">
          <h1 className="title">{title}</h1>
        </div>

        <div className="table-right">
          <div className="table-right-rw">
            {showSearch && (
              <div className="table-right-cl">
                <TextFieldComponent
                  value={search || ""}
                  onChange={onSearchChange || (() => {})}
                  placeholder={placeholderText || "Search"}
                />
              </div>
            )}

            {showExport && (
              <div className="table-right-cl">
                <Button variant="grayOutline">
                  {exportIcon && <img src={exportIcon} alt="Export" />}
                  {exportText}
                </Button>
              </div>
            )}

            {showAdd && (
              <div className="table-right-cl">
                <Button variant="taupeBrownFilled">
                  {addIcon && <img src={addIcon} alt="Add" />}
                  {addText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

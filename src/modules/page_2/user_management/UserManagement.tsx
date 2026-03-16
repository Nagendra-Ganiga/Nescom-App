import Layout from "../../../layout/Layout";
import { useSearch } from "../../../hooks/use_saearch/useSearch";
import TableSection from "../../../components/table_section/TableSection";
import "../styles/styles.scss";
import TableMui from "../../../common_ui/mui_components/table_mui/TableMui";
import { ImagesIndex } from "../../../assets/images/image_index/ImageIndex";

interface Column {
  id: string;
  label: string;
  align?: "left" | "right" | "center";
  width?: string | number;
}
export default function UserManagement() {
  const { search, handleSearch } = useSearch();

  const columns: Column[] = [
    { id: "name", label: "Prenom", align: "left", width: "80px" },
    { id: "Nom", label: "Nom", align: "left", width: "90px" },
    { id: "FRID", label: "FR ID", align: "left", width: "100px" },
    { id: "Profil", label: "Profil", align: "left", width: "100px" },
    { id: "Categorie", label: "Categorie", align: "left", width: "140px" },
    { id: "Email", label: "Email", align: "left", width: "140px" },
    {
      id: "Action",
      label: "Action(s)",
      align: "center",
      width: "80px",
    },
  ] as const;
  const rows = [
    {
      name: "Adeline",
      Nom: "HENG",
      FRID: "frhenged",
      Profil: "OF",
      Categorie: "FR WATERS",
      Email: "Adeline.Heng@fr.nestle.com",
      Action: (
        <div className="table-icon-wrapper">
          <img src={ImagesIndex.Edit} alt="Edit" />
          <img src={ImagesIndex.Delete} alt="Delete" />
        </div>
      ),
    },
  ];
  return (
    <Layout sidebar={false}>
      <div className="table-page-wrapper">
        <TableSection
          title="User Management"
          search={search}
          placeholderText="Search"
          onSearchChange={handleSearch}
          exportIcon={ImagesIndex.Export}
          addIcon={ImagesIndex.Add}
          addText="Add User"
          exportText="Export"
        />
        <TableMui
          columns={columns}
          rows={rows}
          className="user-management-table"
        />
      </div>
    </Layout>
  );
}

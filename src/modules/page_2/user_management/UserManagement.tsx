import Layout from "../../../layout/Layout";
import { useSearch } from "../../../hooks/use_saearch/useSearch";
import Export from "../../../assets/images/Export.svg";
import Add from "../../../assets/images/Add.svg";
import TableSection from "../../../components/table_section/TableSection";
import "../styles/styles.scss";

export default function UserManagement() {
  const { search, handleSearch } = useSearch();

  return (
    <Layout sidebar={false}>
      <TableSection
        title="User Management"
        search={search}
        placeholderText="Search"
        onSearchChange={handleSearch}
        exportIcon={Export}
        addIcon={Add}
        addText="Add User"
        exportText="Export"
      />
    </Layout>
  );
}

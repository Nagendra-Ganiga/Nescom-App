import Layout from "../../../layout/Layout";
import { useSearch } from "../../../hooks/use_saearch/useSearch";
import Export from "../../../assets/images/Export.svg";
import Add from "../../../assets/images/Add.svg";
import TableSection from "../../../components/table_section/TableSection";
import "../styles/styles.scss";

export default function ContactManagement() {
  const { search, handleSearch } = useSearch();

  return (
    <Layout sidebar={false}>
      <TableSection
        title="Contact Management"
        search={search}
        placeholderText="Search"
        onSearchChange={handleSearch}
        exportIcon={Export}
        addIcon={Add}
        addText="Add Contact"
        exportText="Export"
      />
    </Layout>
  );
}

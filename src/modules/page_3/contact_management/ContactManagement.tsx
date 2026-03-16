import Layout from "../../../layout/Layout";
import { useSearch } from "../../../hooks/use_saearch/useSearch";
import TableSection from "../../../components/table_section/TableSection";
import { ImagesIndex } from "../../../assets/images/image_index/ImageIndex";
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
        exportIcon={ImagesIndex.Export}
        addIcon={ImagesIndex.Add}
        addText="Add Contact"
        exportText="Export"
      />
    </Layout>
  );
}


import ProductsCard from "./ProductsCard";




const ProductsPage = ({ digitalTools, selectedProducts, setSelectedProducts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 pl-10 md:grid-cols-2 gap-5 lg:grid-cols-3 text-start">
        {digitalTools.map(digitalTool => <ProductsCard selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} key={digitalTool.id} digitalTool={digitalTool}></ProductsCard>)}
      </div>



    </div>
  );
};

export default ProductsPage;
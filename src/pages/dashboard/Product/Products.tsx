import { useEffect, useState } from "react";
import Button from "../../../components/common/Button/Button";
import SelectBox from "../../../components/common/SelectBox/SelectBox";
import Table from "../../../components/common/Table/Table";
import Input from "../../../components/common/Input/Input";
import PageNation from "../../../components/common/Pagination/Pagination";
import { getProducts } from "../../../api/product/Product";
import type { Product } from "../../../types/product/Product";

const productColumns = [
  { label: "ID", width: "w-[6%]" },
  { label: "상품명", width: "w-[34%]" },
  { label: "판매가", width: "w-[14%]" },
  { label: "배송비", width: "w-[24%]" },
  { label: "플랫폼", width: "w-[12%]" },
  { label: "상세", width: "w-[10%]" },
];

const platformOptions = [
  { label: "플랫폼 전체", value: "all" },
  { label: "eBay", value: "ebay" },
  { label: "Amazon", value: "amazon" },
];

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [platformFilter, setPlatformFilter] = useState("ebay");
  const [searchText, setSearchText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [showPage, setShowPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const pageSize = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const platformCode =
          platformFilter === "all" ? undefined : platformFilter;

        const data = await getProducts(platformCode);

        setProducts(data);
      } catch (error) {
        console.error("상품 목록 조회 실패:", error);
        setErrorMessage("상품 목록을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [platformFilter]);

  const filteredProducts = products.filter((product) => {
    const lowerKeyword = keyword.toLowerCase();

    return (
      product.name.toLowerCase().includes(lowerKeyword) ||
      product.productUrl.toLowerCase().includes(lowerKeyword)
    );
  });

  const handleSearch = () => {
    setKeyword(searchText);
    setShowPage(1);
  };

  const handlePlatformChange = (value: string) => {
    setPlatformFilter(value);
    setShowPage(1);
  };

  const totalPage = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (showPage - 1) * pageSize;
  const showProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

  return (
    <div className="flex min-h-full flex-col bg-slate-200 pb-4">
      <p className="p-5 text-2xl font-bold text-black">상품 목록</p>

      <div className="m-4 flex gap-2">
        <Input
          id="product-search"
          type="text"
          value={searchText}
          onChange={setSearchText}
          onEnter={handleSearch}
          placeholder="검색어 입력 (상품명, URL)"
          className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500"
        />

        <SelectBox
          value={platformFilter}
          onChange={handlePlatformChange}
          options={platformOptions}
          className="w-40"
        />

        <Button
          onClick={handleSearch}
          className="h-11 w-24 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          검색
        </Button>
      </div>

      {loading && (
        <div className="mx-4 rounded-lg bg-white p-6 text-center text-slate-500">
          상품 목록을 불러오는 중입니다.
        </div>
      )}

      {!loading && errorMessage && (
        <div className="mx-4 rounded-lg bg-white p-6 text-center text-red-500">
          {errorMessage}
        </div>
      )}

      {!loading && !errorMessage && (
        <>
          <Table columns={productColumns}>
            {showProducts.map((product) => (
              <tr key={product.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{product.id}</td>

                <td className="px-4 py-3" title={product.name}>
                  {product.name}
                </td>

                <td className="px-4 py-3" title={product.salePrice ?? ""}>
                  {product.salePrice || "-"}
                </td>

                <td className="px-4 py-3" title={product.shippingFee ?? ""}>
                  {product.shippingFee || "-"}
                </td>

                <td className="px-4 py-3">
                  {product.platform?.name || "-"}
                </td>

                <td className="px-4 py-3">
                  <a
                    href={product.productUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    이동
                  </a>
                </td>
              </tr>
            ))}
          </Table>

          {showProducts.length === 0 && (
            <div className="mx-4 rounded-lg bg-white p-6 text-center text-slate-500">
              조회된 상품이 없습니다.
            </div>
          )}

          <div className="mx-4 mt-3 pb-4">
            <p className="mb-2 text-sm text-slate-500">
              총 {filteredProducts.length}건 / 페이지당 {pageSize}건
            </p>

            <PageNation
              showPage={showPage}
              totalPage={totalPage}
              onPageChange={setShowPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
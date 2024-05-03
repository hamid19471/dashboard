import { TfiTrash } from "react-icons/tfi";
import { TfiPencil } from "react-icons/tfi";
import Pagination from "../../../components/pagination";
import { useNavigation } from "react-router-dom";
import Loading from "../../../components/loading-spinner";

const CategoryList = ({ categories: { totalRecords, data }, setOpenModal }) => {
  const navigation = useNavigation();
  return (
    <div className="mt-8 w-full relative">
      {navigation.state !== "idle" && (
        <div className="w-full flex items-center justify-center h-full absolute backdrop-blur z-50 rounded-lg">
          <Loading />
        </div>
      )}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-right">نام دسته بندی</th>
            <th className="px-4 py-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr
              key={category.id}
              className="bg-slate-800 border-slate-700 border-[1px] rounded-md hover:bg-slate-700 ease-in-out"
            >
              <td className="px-4 py-2">{category.name}</td>
              <td className="px-4 py-2 flex items-center justify-center gap-3">
                <button onClick={() => setOpenModal(true)}>
                  <TfiTrash className="w-5 h-5 text-red-500" />
                </button>
                <button>
                  <TfiPencil className="w-5 h-5 text-white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Pagination totalRecords={totalRecords} />
      </div>
    </div>
  );
};

export default CategoryList;

import { Await, useLoaderData } from "react-router-dom";
import CategoryList from "../features/course-categories/components/category-list";
import { Suspense, useState } from "react";
import Modal from "../components/modal";

const CourseCategories = () => {
  const [openModal, setOpenModal] = useState(false);
  const data = useLoaderData();
  return (
    <>
      <div>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700">
          افزودن دسته جدید
        </button>
        <div className="flex items-center justify-start gap-2">
          <Suspense
            fallback={
              <p className="text-blue-500 font-bold text-sm mt-12">
                درحال دریافت اطلاعات...
              </p>
            }
          >
            <Await resolve={data.categories}>
              {(categories) => (
                <CategoryList
                  setOpenModal={setOpenModal}
                  categories={categories}
                />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <Modal
        title="حذف دسته بندی"
        body="آیا از حذف دسته بندی اطمینان دارید؟"
        isOpen={openModal}
        close={() => setOpenModal(false)}
      >
        <button className="bg-red-500 rounded-md px-5 py-2 font-bold">
          حذف
        </button>
        <button
          className="bg-blue-500 rounded-md px-5 py-2 font-bold"
          onClick={() => setOpenModal(false)}
        >
          انصراف
        </button>
      </Modal>
    </>
  );
};

export default CourseCategories;

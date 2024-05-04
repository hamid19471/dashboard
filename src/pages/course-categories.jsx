import { Await, useLoaderData, useNavigate } from "react-router-dom";
import CategoryList from "../features/course-categories/components/category-list";
import { Suspense, useState } from "react";
import Modal from "../components/modal";
import { authHttpService } from "../core/httpService";
import AddOrUpdateCategory from "../components/add-or-update-category";
import { useCategoryContext } from "../context/category-context";

const CourseCategories = () => {
  const { category } = useCategoryContext();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [showAddOrUpdate, setShowAddOrUpdate] = useState(false);
  const handleDeleteCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setOpenModal(true);
  };

  const deleteCategory = async () => {
    setOpenModal(false);
    const response = await authHttpService.delete(
      `/CourseCategory/${selectedCategory}`
    );
    if (response.status === 200) {
      const url = new URL(window.location.href);
      navigate(url.pathname + url.search);
    }
  };

  const data = useLoaderData();
  return (
    <>
      <div>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700"
          onClick={() => setShowAddOrUpdate(true)}
        >
          افزودن دسته جدید
        </button>
        {(showAddOrUpdate || category) && (
          <AddOrUpdateCategory setShowAddOrUpdate={setShowAddOrUpdate} />
        )}
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
                  handleDeleteCategory={handleDeleteCategory}
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
        <button
          className="bg-red-500 rounded-md px-5 py-2 font-bold"
          onClick={deleteCategory}
        >
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

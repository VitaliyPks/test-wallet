import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-[150px] items-center bg-transparent text-white">
      <h1 className="text-2xl font-bold mb-4">Раздел в разработке</h1>
      <p className="text-gray-400 mb-6">Эта страница ещё не готова</p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-orange-400 text-black rounded-[12px] font-medium hover:opacity-90"
      >
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;

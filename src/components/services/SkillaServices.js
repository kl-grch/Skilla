import { useFetch } from "../hooks/useFetch.hooks";

export default function useSkillaService() {
  const {request, loading, error, clearError } = useFetch();

  const _apiBase = "https://api.skilla.ru/mango/";

  const getAllCalls = async (fromDate, toDate) => {
    const res = await request(
      `${_apiBase}getList?date_start=${fromDate}&date_end=${toDate}`
    );
    return res;
  };

  const getAllIncomingCalls = async (fromDate, toDate) => {
    const res = await request(
      `${_apiBase}getList?date_start=${fromDate}&date_end=${toDate}&in_out=1`
    );
    return res;
  };

  const getAllOutgoingCalls = async (fromDate, toDate) => {
    const res = await request(
      `${_apiBase}getList?date_start=${fromDate}&date_end=${toDate}&in_out=0`
    );
    return res;
  };

  return {
    loading,
    error,
    clearError,
    getAllCalls,
    getAllIncomingCalls,
    getAllOutgoingCalls,
  };
}

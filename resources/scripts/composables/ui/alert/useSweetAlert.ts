import swal from "sweetalert";
import { SwalOptions } from "sweetalert/typings/modules/options";

interface CustomSwalOptions extends SwalOptions {
  icon: "success" | "error" | "warning" | "info";
}

export function useSweetAlert() {
  const sweetAlert = (params: Partial<CustomSwalOptions>) =>
    swal({ ...params });

  const successAlert = (params: Partial<CustomSwalOptions>) =>
    swal({ ...params, icon: "success" });

  const errorAlert = (params: Partial<CustomSwalOptions>) =>
    swal({ ...params, icon: "error" });

  const warningAlert = (params: Partial<CustomSwalOptions>) =>
    swal({ ...params, icon: "warning" });

  const infoAlert = (params: Partial<CustomSwalOptions>) =>
    swal({ ...params, icon: "info" });

  return { sweetAlert, successAlert, errorAlert, warningAlert, infoAlert };
}

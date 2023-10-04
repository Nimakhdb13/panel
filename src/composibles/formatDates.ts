import { ref, onMounted, onUnmounted } from "vue";

export function useJalaliDate(objectWithDate: any) {
  if (objectWithDate.length)
    return objectWithDate.map((element: any) => {
      element.created_at = new Date(element.created_at).toLocaleDateString(
        "fa-IR"
      );
    });
  else {
    objectWithDate.created_at = new Date(objectWithDate.created_at).toLocaleDateString(
      "fa-IR"
    );
  }
}

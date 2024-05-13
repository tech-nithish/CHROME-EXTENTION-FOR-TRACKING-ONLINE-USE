import { a0 as getStringTab, S as StorageParams, i as injectStorage, $ as computedAsync, _ as _imports_0, E as CHROME_STORE_CLEAR_YOUTUBE_URL } from "./general.js";
import { r as ref, j as computed, d as defineComponent, i as useI18n, u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, s as createCommentVNode, _ as _export_sfc } from "./i18n.js";
const QUERY_PARAMS_DASHBOARD = "dashboard.html";
const QUERY_PARAMS_TAB = "tab";
const QUERY_PARAMS_TAB_LIMITS = "limits";
const QUERY_PARAMS_BLOCK = "block.html";
const QUERY_PARAMS_BLOCK_DOMAIN = "domain";
function useExtensionPage() {
  const urlObj = ref(new URL(location.href));
  const isLimitPage = computed(
    () => urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_DASHBOARD) && urlObj.value.searchParams.get(QUERY_PARAMS_TAB) == QUERY_PARAMS_TAB_LIMITS
  );
  const isBlockPage = computed(
    () => {
      var _a;
      return urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_BLOCK) && ((_a = urlObj.value.searchParams.get(QUERY_PARAMS_BLOCK_DOMAIN)) == null ? void 0 : _a.includes("youtube.com"));
    }
  );
  function updateTab(tab) {
    let targetTab = getStringTab(tab);
    const currentTab = urlObj.value.searchParams.get(QUERY_PARAMS_TAB);
    if (window.history.replaceState && currentTab) {
      const sourceUrl = `tab=${currentTab}`;
      const targetUrl = `tab=${targetTab}`;
      window.history.replaceState(
        location.href,
        document.title,
        location.href.replace(sourceUrl, targetUrl)
      );
      urlObj.value = new URL(location.href);
    }
  }
  return {
    isLimitPage,
    isBlockPage,
    updateTab
  };
}
async function usePromoExtension() {
  const settingsStorage = injectStorage();
  const extensionPage = useExtensionPage();
  const hasReviewOnLimits = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS
  );
  const hasReviewOnBlock = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK
  );
  const whitelist = Object.values(
    await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
  );
  const isIncludeYoutube = computed(
    () => whitelist.find((x) => x.domain == "youtube.com") != void 0
  );
  const showOnLimitPage = computed(
    () => (hasReviewOnLimits == void 0 || hasReviewOnLimits == false) && extensionPage.isLimitPage.value && isIncludeYoutube.value
  );
  const showOnBlockPage = computed(
    () => (hasReviewOnBlock == void 0 || hasReviewOnBlock == false) && extensionPage.isBlockPage.value
  );
  return showOnLimitPage.value || showOnBlockPage.value;
}
const _hoisted_1 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2 = { class: "btn-block" };
const _hoisted_3 = ["value"];
const __default__ = {
  name: "PromoClearYouTube"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const extensionPage = useExtensionPage();
    const showReview = ref(true);
    const canShowPromo = computedAsync(async () => await usePromoExtension());
    async function closeBlock() {
      showReview.value = false;
      await saveValue();
    }
    async function openStore() {
      showReview.value = false;
      window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
      await saveValue();
    }
    async function saveValue() {
      let param = void 0;
      if (extensionPage.isBlockPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK;
      if (extensionPage.isLimitPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS;
      if (param)
        await settingsStorage.saveValue(param, true);
    }
    return (_ctx, _cache) => {
      return showReview.value && unref(canShowPromo) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("p", null, toDisplayString(unref(t)("promoClearYoutube.message")), 1),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            height: "15",
            src: _imports_0,
            onClick: _cache[0] || (_cache[0] = ($event) => closeBlock())
          }),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("promoClearYoutube.description"),
            onClick: _cache[1] || (_cache[1] = ($event) => openStore())
          }, null, 8, _hoisted_3)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const PromoClearYouTube_vue_vue_type_style_index_0_scoped_befbe52a_lang = "";
const PromoClearYouTube = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-befbe52a"]]);
export {
  PromoClearYouTube as P,
  useExtensionPage as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW9DbGVhcllvdVR1YmUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZS50cyIsIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlUHJvbW9FeHRlbnNpb24udHMiLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9tb0NsZWFyWW91VHViZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmdUYWIgfSBmcm9tICcuLi91dGlscy9leHRlbnNpb24tdGFicyc7XHJcblxyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRCA9ICdkYXNoYm9hcmQuaHRtbCc7XHJcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfVEFCID0gJ3RhYic7XHJcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfVEFCX0xJTUlUUyA9ICdsaW1pdHMnO1xyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLID0gJ2Jsb2NrLmh0bWwnO1xyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLX0RPTUFJTiA9ICdkb21haW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUV4dGVuc2lvblBhZ2UoKSB7XHJcbiAgY29uc3QgdXJsT2JqID0gcmVmKG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xyXG5cclxuICBjb25zdCBpc0xpbWl0UGFnZSA9IGNvbXB1dGVkKFxyXG4gICAgKCkgPT5cclxuICAgICAgdXJsT2JqLnZhbHVlLmhvc3RuYW1lID09IF9fQVBQX0lEX18gJiZcclxuICAgICAgdXJsT2JqLnZhbHVlLnBhdGhuYW1lLmluY2x1ZGVzKFFVRVJZX1BBUkFNU19EQVNIQk9BUkQpICYmXHJcbiAgICAgIHVybE9iai52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KFFVRVJZX1BBUkFNU19UQUIpID09IFFVRVJZX1BBUkFNU19UQUJfTElNSVRTLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGlzQmxvY2tQYWdlID0gY29tcHV0ZWQoXHJcbiAgICAoKSA9PlxyXG4gICAgICB1cmxPYmoudmFsdWUuaG9zdG5hbWUgPT0gX19BUFBfSURfXyAmJlxyXG4gICAgICB1cmxPYmoudmFsdWUucGF0aG5hbWUuaW5jbHVkZXMoUVVFUllfUEFSQU1TX0JMT0NLKSAmJlxyXG4gICAgICB1cmxPYmoudmFsdWUuc2VhcmNoUGFyYW1zLmdldChRVUVSWV9QQVJBTVNfQkxPQ0tfRE9NQUlOKT8uaW5jbHVkZXMoJ3lvdXR1YmUuY29tJyksXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVGFiKHRhYjogU2V0dGluZ3NUYWIpIHtcclxuICAgIGxldCB0YXJnZXRUYWIgPSBnZXRTdHJpbmdUYWIodGFiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB1cmxPYmoudmFsdWUuc2VhcmNoUGFyYW1zLmdldChRVUVSWV9QQVJBTVNfVEFCKTtcclxuICAgIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgY3VycmVudFRhYikge1xyXG4gICAgICBjb25zdCBzb3VyY2VVcmwgPSBgdGFiPSR7Y3VycmVudFRhYn1gO1xyXG4gICAgICBjb25zdCB0YXJnZXRVcmwgPSBgdGFiPSR7dGFyZ2V0VGFifWA7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcclxuICAgICAgICBsb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlLFxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYucmVwbGFjZShzb3VyY2VVcmwsIHRhcmdldFVybCksXHJcbiAgICAgICk7XHJcbiAgICAgIHVybE9iai52YWx1ZSA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNMaW1pdFBhZ2UsXHJcbiAgICBpc0Jsb2NrUGFnZSxcclxuICAgIHVwZGF0ZVRhYixcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9lbnRpdHkvcmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgdXNlRXh0ZW5zaW9uUGFnZSB9IGZyb20gJy4vdXNlRXh0ZW5zaW9uUGFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRCA9ICdkYXNoYm9hcmQuaHRtbCc7XHJcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfREFTSEJPQVJEX1RBQiA9ICd0YWInO1xyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRF9UQUJfU0VUVElOR1MgPSAnc2V0dGluZ3MnO1xyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLID0gJ2Jsb2NrLmh0bWwnO1xyXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLX0RPTUFJTiA9ICdkb21haW4nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVByb21vRXh0ZW5zaW9uKCkge1xyXG4gIGNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuICBjb25zdCBleHRlbnNpb25QYWdlID0gdXNlRXh0ZW5zaW9uUGFnZSgpO1xyXG5cclxuICBjb25zdCBoYXNSZXZpZXdPbkxpbWl0cyA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9PTl9MSU1JVFMsXHJcbiAgKTtcclxuICBjb25zdCBoYXNSZXZpZXdPbkJsb2NrID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX09OX0JMT0NLLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHdoaXRlbGlzdCA9IE9iamVjdC52YWx1ZXMoXHJcbiAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVNUUklDVElPTl9MSVNULCBbXSksXHJcbiAgKSBhcyBSZXN0cmljdGlvbltdO1xyXG5cclxuICBjb25zdCBpc0luY2x1ZGVZb3V0dWJlID0gY29tcHV0ZWQoXHJcbiAgICAoKSA9PiB3aGl0ZWxpc3QuZmluZCh4ID0+IHguZG9tYWluID09ICd5b3V0dWJlLmNvbScpICE9IHVuZGVmaW5lZCxcclxuICApO1xyXG5cclxuICBjb25zdCBzaG93T25MaW1pdFBhZ2UgPSBjb21wdXRlZChcclxuICAgICgpID0+XHJcbiAgICAgIChoYXNSZXZpZXdPbkxpbWl0cyA9PSB1bmRlZmluZWQgfHwgaGFzUmV2aWV3T25MaW1pdHMgPT0gZmFsc2UpICYmXHJcbiAgICAgIGV4dGVuc2lvblBhZ2UuaXNMaW1pdFBhZ2UudmFsdWUgJiZcclxuICAgICAgaXNJbmNsdWRlWW91dHViZS52YWx1ZSxcclxuICApO1xyXG4gIGNvbnN0IHNob3dPbkJsb2NrUGFnZSA9IGNvbXB1dGVkKFxyXG4gICAgKCkgPT5cclxuICAgICAgKGhhc1Jldmlld09uQmxvY2sgPT0gdW5kZWZpbmVkIHx8IGhhc1Jldmlld09uQmxvY2sgPT0gZmFsc2UpICYmXHJcbiAgICAgIGV4dGVuc2lvblBhZ2UuaXNCbG9ja1BhZ2UudmFsdWUsXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHNob3dPbkxpbWl0UGFnZS52YWx1ZSB8fCBzaG93T25CbG9ja1BhZ2UudmFsdWU7XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJyZXZpZXctYmxvY2tcIiB2LWlmPVwic2hvd1JldmlldyAmJiBjYW5TaG93UHJvbW9cIj5cclxuICAgIDxwPnt7IHQoJ3Byb21vQ2xlYXJZb3V0dWJlLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJidG4tYmxvY2tcIj5cclxuICAgICAgPGltZyBoZWlnaHQ9XCIxNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmdcIiBAY2xpY2s9XCJjbG9zZUJsb2NrKClcIiAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ3Byb21vQ2xlYXJZb3V0dWJlLmRlc2NyaXB0aW9uJylcIiBAY2xpY2s9XCJvcGVuU3RvcmUoKVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvbW9DbGVhcllvdVR1YmUnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwgfSBmcm9tICcuLi91dGlscy9jaHJvbWUtdXJsJztcclxuaW1wb3J0IHsgdXNlUHJvbW9FeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb3NpdGlvbnMvdXNlUHJvbW9FeHRlbnNpb24nO1xyXG5pbXBvcnQgeyBjb21wdXRlZEFzeW5jIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJztcclxuaW1wb3J0IHsgdXNlRXh0ZW5zaW9uUGFnZSB9IGZyb20gJy4uL2NvbXBvc2l0aW9ucy91c2VFeHRlbnNpb25QYWdlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5jb25zdCBleHRlbnNpb25QYWdlID0gdXNlRXh0ZW5zaW9uUGFnZSgpO1xyXG5cclxuY29uc3Qgc2hvd1JldmlldyA9IHJlZjxib29sZWFuPih0cnVlKTtcclxuXHJcbmNvbnN0IGNhblNob3dQcm9tbyA9IGNvbXB1dGVkQXN5bmMoYXN5bmMgKCkgPT4gYXdhaXQgdXNlUHJvbW9FeHRlbnNpb24oKSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjbG9zZUJsb2NrKCkge1xyXG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcclxuICBhd2FpdCBzYXZlVmFsdWUoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3BlblN0b3JlKCkge1xyXG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcclxuICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwsICdfYmxhbmsnKTtcclxuICBhd2FpdCBzYXZlVmFsdWUoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVZhbHVlKCkge1xyXG4gIGxldCBwYXJhbTogU3RvcmFnZVBhcmFtcyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBpZiAoZXh0ZW5zaW9uUGFnZS5pc0Jsb2NrUGFnZS52YWx1ZSkgcGFyYW0gPSBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfT05fQkxPQ0s7XHJcbiAgaWYgKGV4dGVuc2lvblBhZ2UuaXNMaW1pdFBhZ2UudmFsdWUpIHBhcmFtID0gU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX09OX0xJTUlUUztcclxuICBpZiAocGFyYW0pIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUocGFyYW0sIHRydWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnJldmlldy1ibG9jayB7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtaW4td2lkdGg6IDY1NXB4O1xyXG59XHJcbi5yZXZpZXctYmxvY2sgLmJ0bi1ibG9jayB7XHJcbiAgbWFyZ2luOiA4cHggNXB4IDAgMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4ucmV2aWV3LWJsb2NrIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnJldmlldy1ibG9jayBwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLnJldmlldy1ibG9jayBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJTyxNQUFNLHlCQUF5QjtBQUMvQixNQUFNLG1CQUFtQjtBQUN6QixNQUFNLDBCQUEwQjtBQUNoQyxNQUFNLHFCQUFxQjtBQUMzQixNQUFNLDRCQUE0QjtBQUVsQyxTQUFTLG1CQUFtQjtBQUNqQyxRQUFNLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUM7QUFFekMsUUFBTSxjQUFjO0FBQUEsSUFDbEIsTUFDRSxPQUFPLE1BQU0sWUFBWSxzQ0FDekIsT0FBTyxNQUFNLFNBQVMsU0FBUyxzQkFBc0IsS0FDckQsT0FBTyxNQUFNLGFBQWEsSUFBSSxnQkFBZ0Is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

<template>
   <a-layout-header
  :style="{
    padding: '0 16px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    overflowX: 'auto',
  }"
>
  <a-row style="width: 100%" align="middle" justify="space-between">
    <!-- Left (Menu icon) -->
    <a-col :xs="24" :sm="24" :md="4" :lg="4">
      <a-space>
        <MenuOutlined class="trigger" @click="showHideMenu" />
      </a-space>
    </a-col>

    <!-- Right (Icons, dropdowns, etc.) -->
    <a-col :xs="24" :sm="24" :md="20" :lg="20">
      <HeaderRightIcons>
        <a-space wrap>
          <!-- App Module Icons (Desktop only) -->
          <template v-if="innerWidth > 768">
            <component
              v-for="(appModule, index) in appModules"
              :key="index"
              v-bind:is="appModule + 'TopbarIcon'"
            />
          </template>

          <!-- Static topbar icon (Desktop only) -->
          <TopbarIconVue v-if="innerWidth > 768" />

          <!-- POS Button -->
          <template
            v-if="
              innerWidth > 768 &&
              (permsArray.includes('pos_view') || permsArray.includes('admin')) &&
              willSubscriptionModuleVisible('pos')
            "
          >
            <a-button
              type="link"
              @click="$router.push({ name: 'admin.pos.index' })"
            >
              <ShoppingCartOutlined />
              <span>{{ $t('menu.pos') }}</span>
            </a-button>
            <a-divider type="vertical" />
          </template>

          <!-- Warehouse + Shortcut -->
          <template v-if="selectedWarehouse && selectedWarehouse.name">
            <template v-if="appSetting.shortcut_menus !== 'bottom'">
              <AffixButton position="top" />
              <a-divider type="vertical" />
            </template>
            <ChangeWarehouse />
            <a-divider type="vertical" />
          </template>

          <!-- Language Switcher -->
          <a-dropdown
            :placement="appSetting.rtl ? 'bottomLeft' : 'bottomRight'"
          >
            <a class="ant-dropdown-link" @click.prevent>
              {{ selectedLang }}
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  v-for="lang in langs"
                  :key="lang.key"
                  @click="langSelected(lang.key)"
                >
                  <a-space>
                    <a-avatar
                      shape="square"
                      size="small"
                      :src="lang.image_url"
                    />
                    {{ lang.name }}
                  </a-space>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <a-divider type="vertical" />

          <!-- Profile Icon -->
          <a-button
            type="link"
            @click="$router.push({ name: 'admin.settings.profile.index' })"
            class="p-0"
          >
            <a-avatar size="small" :src="user.profile_image_url" />
          </a-button>
        </a-space>
      </HeaderRightIcons>
    </a-col>
  </a-row>
</a-layout-header>

</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { MenuOutlined, DownOutlined, ShoppingCartOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";
import { loadLocaleMessages } from "../i18n";
import { HeaderRightIcons } from "./style";
import common from "../../common/composable/common";
import MenuMode from "./MenuMode.vue";
import ChangeWarehouse from "./ChangeWarehouse.vue";
import AffixButton from "./AffixButton.vue";
import TopbarIconVue from "../../main/views/hrm/topbarIcon.vue";

export default {
    components: {
        MenuOutlined,
        DownOutlined,
        HeaderRightIcons,
        MenuMode,
        ChangeWarehouse,
        AffixButton,
        ShoppingCartOutlined,
        TopbarIconVue,
    },
    setup(props, { emit }) {
        const {
            user,
            appSetting,
            permsArray,
            menuCollapsed,
            willSubscriptionModuleVisible,
            selectedWarehouse,
            appModules,
        } = common();
        const store = useStore();
        const selectedLang = ref(store.state.auth.lang);
        const { locale, t } = useI18n();
        const themeMode = ref(window.config.theme_mode == "light" ? false : true);
        const themeModeLoading = ref(false);

        const langSelected = async (lang) => {
            store.commit("auth/updateLang", lang);
            await loadLocaleMessages(i18n, lang);

            selectedLang.value = lang;
            locale.value = lang;
        };

        const showHideMenu = () => {
            store.commit("auth/updateMenuCollapsed", !menuCollapsed.value);
        };

        const logout = () => {
            store.dispatch("auth/logout");
        };

        const themeModeChanged = (checked) => {
            const mode = checked ? "dark" : "light";
            themeModeLoading.value = true;

            axiosAdmin
                .post("change-theme-mode", {
                    theme_mode: mode,
                })
                .then((response) => {
                    if (response.data.status == "success") {
                        window.location.reload();
                    }
                    themeModeLoading.value = false;
                });
        };

        return {
            selectedWarehouse,
            permsArray,
            appSetting,
            willSubscriptionModuleVisible,
            logout,
            showHideMenu,
            langSelected,
            selectedLang,
            langs: computed(() => store.state.auth.allLangs),
            appModules,

            user,

            themeMode,
            themeModeChanged,
            themeModeLoading,

            innerWidth: window.innerWidth,
        };
    },
};
</script>

<style lang="less">
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding-top: 4px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}
</style>

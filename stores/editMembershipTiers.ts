import { create } from 'zustand';
import { IBaseStore } from './baseStore';

interface IEditMembershipStore extends IBaseStore, IMembershipTier {
  setValue: (value: string | boolean | number, key: string) => void;
  addFeature: () => void;
  addPermission: () => void;
  updateMembershipFeature: (
    index: number,
    item: IMembershipTierFeature,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
  updateMembershipPermission: (
    index: number,
    item: IMembershipTierPermission,
    action?: 'update' | 'copy' | 'delete',
  ) => void;
}

const defaultStore = {
  id: '0',
  default: false,
  maxRecipeCount: 1,
  maxTeamSize: 1,
  monthlyCost: 0,
  permissions: [],
  tierName: '',
  tierDescription: '',
  visible: true,
  yearlyCost: 0,
  features: [],
};

export const useEditMembershipTier = create<IEditMembershipStore>(
  (set, get) => ({
    ...defaultStore,
    setValue: (value, key) => {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    },
    addPermission: () => {
      const newItem = {
        name: '',
        permissions: [],
        default: false,
      };
      set((state) => ({
        permissions: [...(state.permissions || []), newItem],
      }));
    },
    addFeature: () => {
      const newItem = {
        title: '',
        description: '',
      };
      set((state) => ({
        features: [...(state.features || []), newItem],
      }));
    },
    updateMembershipFeature: (index, item, action) => {
      const features = get().features || [];
      if (index >= 0) {
        switch (action) {
          case 'copy':
            set({
              features: [...features, { ...features[index] }],
            });
            break;
          case 'delete':
            set({
              features: features.splice(index, 1),
            });
            break;
          default:
            features[index] = item;
            set({ features });
        }
      }
    },
    updateMembershipPermission: (index, item, action) => {
      const permissions = get().permissions || [];
      if (index >= 0) {
        switch (action) {
          case 'copy':
            set({
              permissions: [...permissions, { ...permissions[index] }],
            });
            break;
          case 'delete':
            set({
              permissions: permissions.filter((p) => p !== item),
            });
            break;
          default:
            console.log(item, index);
            permissions[index] = item;
            set({ permissions });
        }
      }
    },
    clear: () => set(defaultStore),
  }),
);

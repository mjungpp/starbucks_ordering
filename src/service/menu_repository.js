import { firebaseDatabase } from './firebase';

class MenuRepository {
    saveMenu(userId, menu) {
       firebaseDatabase.ref(`${userId}/menus/${menu.id}`).set(menu);
    }

    syncMenus(userId, onUpdate) {
        const ref =firebaseDatabase.ref(`${userId}/menus`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default MenuRepository;
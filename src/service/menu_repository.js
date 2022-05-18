import firebaseApp from './firebase';

class MenuRepository {
    saveMenu(userId, menu) {
        firebaseApp
        .database()
        .ref(`${userId}/menus/${menu.id}`)
        .set(menu);
    }

    syncMenus(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/menus`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default MenuRepository;
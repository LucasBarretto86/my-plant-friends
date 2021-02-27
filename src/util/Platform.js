const userAgent = window.navigator.userAgent;

const Platform = {
    isIPhone() {
        return userAgent.matches(/iPhone/)[0] != null;
    },

    isMobile() {
        return userAgent.match(/Mobile/)[0] != null;
    },

    isDesktop() {
        return !isIPhone && !isMobile;
    },

    toString() {
        if (isDesktop()) return 'desktop';
        if (isMobile() || isIPhone()) return 'mobile';
    }
}

export default Platform;
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from '@mui/icons-material';

const tabPrope = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`

    }
}
export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabPrope(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabPrope(1) },
        { label: "رزومه من", icon: <TextSnippetRounded />, ...tabPrope(2) },
        { label: "نمونه کارها", icon: <TerminalRounded />, ...tabPrope(3) },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabPrope(4) }

    ]
    return tabs;
}

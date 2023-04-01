import { FavoriteBorderOutlined, LocalShippingOutlined, PersonOutlineOutlined, LocalGroceryStoreOutlined } from "@mui/icons-material"

export default {
  logo: { value: "SimplEcommerce", route: "/home" },
  icons: [
    { icon: FavoriteBorderOutlined, route: "/cart" },
    { icon: LocalGroceryStoreOutlined, route: "/products" }, { icon: LocalShippingOutlined, route: "/cart" }, { icon: PersonOutlineOutlined, route: "/home" },]
}

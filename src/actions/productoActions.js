import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from "../types";

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());

    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

//si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

//si hubo un error
const agregarProductoError = () => ({});

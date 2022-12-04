import { Dialog } from "@headlessui/react";
import { styled } from "../../../stitches.config";
export const Container = styled(Dialog, {
  position: "relative",
});

export const ContentContainer = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: 'center',
  backgroundColor: "#00000095",
  padding: "2rem 5rem",
  overflowY: 'auto',
  overflowX: 'hidden'
});

export const Content = styled(Dialog.Panel, {

  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto'

});

import { Dialog } from "@headlessui/react";
import { styled } from "../../stitches.config";
export const Container = styled(Dialog, {
  position: "relative"
});

export const ContentContainer = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#00000095",
  padding: "0 1rem"
});

export const Content = styled(Dialog.Panel, {});

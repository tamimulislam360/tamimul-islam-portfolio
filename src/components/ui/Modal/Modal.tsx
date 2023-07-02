import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Chip,
} from "@material-tailwind/react";
import type { ModalProps } from "../../../types/types";
import { Link } from "react-router-dom";

export default function Modal({
  project,
  open,
  handleOpen,
  handleClose,
}: ModalProps) {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        dismiss={{
          escapeKey: true,
          outsidePress: true,
        }}
      >
        <DialogHeader>{project?.title}</DialogHeader>
        <DialogBody divider>
          <div className="group/project overflow-hidden h-48 relative">
            <img
              src={project?.thumbnail}
              className="w-full h-auto duration-[3000ms] translate-y-0 group-hover/project:translate-y-custom"
              alt=""
            />
          </div>
          <div className="my-3">{project?.description}</div>
          <div className="flex items-center gap-2">
            {project?.technologies?.map((tech, i) => (
              <Chip key={i} variant="ghost" value={tech} />
            ))}
          </div>
        </DialogBody>
        <DialogFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              className="text-accent-primary dark:text-accent-secondary"
              to={project?.links?.live}
            >
              Live Demo
            </Link>
            <Link
              className="text-dark-secondary dark:text-white-secondary"
              to={project?.links?.github?.front}
            >
              Github
            </Link>
          </div>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

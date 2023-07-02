export type Project = {
  id: number | string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  links: {
    github: {
      front: string;
      back: string;
    };
    live: string;
  };
  technologies: string[];
};

export type ModalProps = {
  project: Project | null;
  open: boolean;
  handleOpen: (project: Project) => void;
  handleClose: () => void;
};

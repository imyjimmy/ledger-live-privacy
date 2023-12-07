import React from "react";

import Box from "~/renderer/components/Box";
import Modal from "~/renderer/components/Modal";
import ModalBody from "~/renderer/components/Modal/ModalBody";
import ErrorDisplay from "~/renderer/components/ErrorDisplay";

export type Props = {
  isOpened: boolean;
  onClose: () => void;
  error?: Error;
  onRetry?: () => void;
  withExportLogs?: boolean;
};

const ErrorModal = ({ isOpened, onClose, error, onRetry, withExportLogs, ...props }: Props) => {
  return (
    <Modal name="MODAL_ERROR" backdropColor isOpened={isOpened} onClose={onClose} centered>
      <ModalBody
        {...props}
        onClose={onClose}
        render={() => (
          <Box>
            {error && (
              <ErrorDisplay error={error} onRetry={onRetry} withExportLogs={withExportLogs} />
            )}
          </Box>
        )}
      />
      
    </Modal>
  );
};
export default ErrorModal;

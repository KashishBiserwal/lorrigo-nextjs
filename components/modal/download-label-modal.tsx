import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-model-store";
import { InvoicePage } from "../Invoice/indes";

export const DownloadLableModal = () => {
    const { isOpen, onClose, type, data } = useModal();

    const {order} = data;

    const isModalOpen = isOpen && type === "downloadLabel";

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white dark:text-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Download Label for Order #{order?.order_reference_id}
                    </DialogTitle>
                </DialogHeader>

                <InvoicePage order={order} />  

            </DialogContent>
        </Dialog>
    )
};
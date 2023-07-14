import { User, Listing, Reservation } from "@prisma/client";

export type safeListings = Omit<
    Listing,
    "createdAt"
>& {
    createdAt: string;
}

export type safeReservations = Omit<
    Reservation,
    'createdAt' | 'startDate' | 'endDate' | 'listing'
> & {
    createdAt: string;
    startDate: string;
    endDate: string
    listing: safeListings
}



export type safaUser = Omit<
    User,
    "createdAt" | "updatedAt" | 'emailVerified'
> & {
    createdAt: string
    updatedAt: string
    emailVerified: string | null
}
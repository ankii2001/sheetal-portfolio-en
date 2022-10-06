interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    backgroundInformation: string;
    email: string;
    address: string;
    role: string;
    HeroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Paper extends SanityBody{
    title: string;
    _type: 'paper';
    image: Image;
    summary: string;
}

export interface Experience extends SanityBody{
    _type: 'experience';
    company: string;
    companyImage: Image;
    duration: number;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Award extends SanityBody{
    title: string;
    _type: 'award';
    image: Image;
    summary: string;
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}
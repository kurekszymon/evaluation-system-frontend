export interface BackendResponse<T> {
  data: T;
  message: string;
}

export interface FileUploadResponse {
  file_name?: string;
  file_path?: string;
}

export interface FileProcessResponse {
  references: Reference[];
}

export interface Reference {
  author?: Array<string>;
  misc?: Array<string>;
  raw_ref?: Array<string>;
  year?: Array<string>;
  type?: Array<string>;
  volume?: Array<string>;
}


// if error, respond like:
// HTTP/1.1 403 Forbidden
// Date: Wed, 21 Dec 2016 20:33:00 GMT
// Server: AmazonS3
// Transfer-Encoding: chunked
// x-amz-error-code: AccessDenied
// x-amz-error-message: Access Denied
// x-amz-id-2: HteVr4cPi9iddwUdAifVTxLZcidlh
// e1yxO6mtr1lqaGRSW/lZlQMGLbIztWOTUcDP3vMA6PwpNE=
// x-amz-request-id: FD4EA11DD16537F5
//
// if redirect, redirect should be same as get code
//
// if success, respond with meta headers like:
// HTTP/1.1 200 OK
// Content-Length: 314
// Content-Type: text/html
// Date: Wed, 21 Dec 2016 20:32:52 GMT
// ETag: "6af6552e24eb4bdcc83f1b227dfc3dda"
// Last-Modified: Fri, 02 Dec 2016 18:06:55 GMT
// Server: AmazonS3
// x-amz-id-2: o2wNnLjNiRhiL83ji34IeV5vLV/kXoIN+nzh41XE/cz7+
// 8C5P3O3SIRj7PYNmhhJqE2NyDA2h5g=
// x-amz-meta-somekey: mymetadata!!!
// x-amz-request-id: 89BBCC95D4738024
//
//
// if redirect rule for error and get error redirect like:
// called head with prefix zzz and got 403 so satisfied conditions for redirect
// HTTP/1.1 301 Moved Permanently
// Content-Length: 0
// Date: Thu, 22 Dec 2016 02:47:48 GMT
// Location: http://whatever.com.s3-website-us-east-1.amazonaws.com/zzz
// Server: AmazonS3
// x-amz-id-2: 5HXWYfdLQS8ZRBZJcKV1cxqxgKMTJzg74rGl61kRLA
// KX/MgqE4dZCJ4d9eF59Wbg/kza40cWcoA=
// x-amz-request-id: 0073330F58C7137C

export default function websiteHead() {
    // placeholder
    return undefined;
}

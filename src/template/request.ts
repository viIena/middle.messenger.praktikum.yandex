type MethodsType = 'GET' | 'POST' | 'PUT' | 'DELETE'

type OptionsType = {
    method: MethodsType;
    data?: any;
    timeout?: number;
    headers?: Record<string, string>;
  }

function queryStringify(data: any): string {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    return "?" + Object
        .entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
}

export class HTTPTransport {
    get = (url: string, options: OptionsType) => {

            return this.request(url, {...options, method: 'GET'});
    };

    post = (url: string, options: OptionsType) => {
            return this.request(url, {...options, method: 'POST'});
    };

    put = (url: string, options: OptionsType) => {
            return this.request(url, {...options, method: 'PUT'});
    };

    delete = (url: string, options: OptionsType) => {
            return this.request(url, {...options, method: 'DELETE'});
    };

    request = (url: string, options: OptionsType) => {
            const {headers = {}, method, data, timeout = 5000} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
                            return;
                    }

                const xhr = new XMLHttpRequest();
                const isGet = method === 'GET';

                xhr.open(
                            method,
                            isGet && !!data
                                    ? `${url}${queryStringify(data)}`
                                    : url,
                    );

                    Object.keys(headers).forEach(key => {
                            xhr.setRequestHeader(key, headers[key]);
                    });

                xhr.onload = function() {
                      resolve(xhr);
                };

                xhr.onabort = reject;
                xhr.onerror = reject;

                xhr.timeout = timeout;
                xhr.ontimeout = reject;

                  if (isGet || !data) {
                        xhr.send();
                    } else {
                        xhr.send(data);
                    }
          });
    };
}
